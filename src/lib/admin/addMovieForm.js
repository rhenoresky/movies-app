"use server";

export const addMovie = async (prevState, formData) => {
  const { title, description, duration, rating, release, categories, image } = Object.fromEntries(formData);

  try {
    const id = await fetchMovie({
      title,
      description,
      duration: parseInt(duration),
      rating: parseFloat(rating),
      release,
    });

    if (!id) {
      return { errorAddMovie: true };
    }

    const category = categories.split(",");
    const resAddCategory = await fetchCategory({ id, category });

    if (!resAddCategory) {
      await fetchDeleteMovie(id);
      return { errorAddCategory: true };
    }

    const resAddImage = await fetchImage(id, image);

    if (!resAddImage) {
      await fetchDeleteMovie(id);
      return { errorAddImage: true };
    }

    return { success: true };
  } catch (error) {
    return { errorConnection: true };
  }
};

const fetchMovie = async (data) => {
  const res = await fetch(`${process.env.API_URL}/movie`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return false;
  }

  const movie = await res.json();
  return movie.data.id;
};

const fetchCategory = async (data) => {
  const res = await fetch(`${process.env.API_URL}/movie/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return false;
  }

  return true;
};

const fetchImage = async (id, image) => {
  const form = new FormData();
  form.append("id", id);
  form.append("image", image);

  const res = await fetch(`${process.env.API_URL}/movie/image`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    return false;
  }

  return true;
};

const fetchDeleteMovie = async (id) => {
  const res = await fetch(`${process.env.API_URL}/movie/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    console.log(`Failed delete movie ${id}`);
  }
};
