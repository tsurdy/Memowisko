import React, { useState } from "react";

const CreateMeme = (props) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //obsługa zmiany nazwy nowego mema 
  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  //obsługa zmiany url 
  const handleImageUrlChange = (e) => {
    setImageUrl(e.currentTarget.value);
  };

  //obsługa tworzenia nowego mema 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreateMeme({
      //dodanie nowego id 
      id: props.memesLength + 1,
      name: name,
      image: imageUrl,
      likes: 0,
      dislikes: 0,
    });

    //czyszczenie pól formularza po dodaniu mema
    setImageUrl("");
    setName("");
  };

  // formularz tworzenia nowego mema
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa..."
        name="name"
        value={name}
        onChange={handleNameChange}
        className={"input"}
      />

      <input
        type="text"
        placeholder="URL..."
        name="url"
        value={imageUrl}
        onChange={handleImageUrlChange}
        className={"input"}
      />

      <button type="submit" className={"form__button"}>
        Stwórz
      </button>
    </form>
  );
};

export default CreateMeme;
