import { useState } from "react";

const MyForm = () => {
  // set value dari nama
  const [name, setName] = useState();
  // set value dari pekerjaan
  const [job, setJob] = useState();

  const handleSubmit = (event) => {
    // mencegah tindakan default dari elemen yang dipilih
    event.preventDefault();
    // mengambil value dari form dengan id namaUser
    const nama = document.getElementById("namaUser").value;
    // mengambil value dari form dengan id jobUser
    const job = document.getElementById("jobUser").value;

    const desc = document.getElementById("desc");
    // menampilkan kembali id desc
    desc.style.display = "";

    setName(nama);
    setJob(job);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama</label>
          <input id="namaUser" type="text" name="name" />
        </div>
        <div>
          <label>Pekerjaan</label>
          <input id="jobUser" type="text" name="job" />
        </div>
        <div>
          <label></label>
          <button type="submit">submit</button>
        </div>
      </form>
      <div id="desc" style={{ display: "none" }}>
        <h2>Hi, my name {name}</h2>
        <h2>My job is {job}</h2>
      </div>
    </div>
  );
};

export default MyForm;
