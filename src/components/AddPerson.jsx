import { useState } from "react";

const AddPerson = (props) => {
  const [gender, setGender] = useState("DEFAULT");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    props.onClickBackdrop();
  }

  const addPerson = () => {
    const validName = new RegExp(
        '^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻżvxq ]{1,18}$'
     );
    const validDesc = new RegExp(
      '^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻżvxq 1234567890.,!?;:]{1,170}$'  
    );

    if(name.length > 18) setError("Imię i nazwisko jest za długie!")
    else if(desc.length > 170) setError("Opis jest za długi!")
    else if(!validName.test(name.trim())) setError("Niepoprawne imię lub nazwisko!");
    else if(!validDesc.test(desc.trim())) setError("Niepoprawny opis!");
    else if(gender == "DEFAULT") setError("Niepoprawna płeć!")

    else {
        props.addPerson(name, gender, desc);
    }
  }

  return (
    <div className="bg-base-100 absolute z-20 min-w-[500px] w-[500px] p-3 rounded-xl m-3 left-[calc(50vw-250px)] h-[470px] top-[calc(50vh-235px)]">
      <h1 className="font-Kanit text-[25px] mb-5 text-center">
        Dodaj nową osobę
      </h1>

      <input
        type="text"
        placeholder="Imię i nazwisko"
        className="input-bordered input w-full mb-4 font-Kanit text-[15px]" onChange={(e) => setName(e.target.value)}
      />

      <select
        className="select w-full input-bordered mb-4 font-Kanit text-[15px] font-light" value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="DEFAULT" disabled defaultValue>
          Płeć
        </option>
        <option value="K">Kobieta</option>
        <option value="M">Mężczyzna</option>
      </select>

      <textarea
        className="textarea resize-none font-Kanit text-[15px] input-bordered mb-2 w-full h-[150px]"
        placeholder="Opis" onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <p className="text-error mb-4 text-[15px] h-[23px] font-Kanit text-center">{error}</p>

      <div>
        <ul className="flex justify-around w-full menu menu-horizontal px-7 pr-10">
        <button className="btn btn-outline btn-error font-bold" onClick={onClose}>Anuluj</button>
        <button className="btn btn-outline btn-primary font-bold" onClick={addPerson}>Dodaj</button>
        </ul>
      </div>
    </div>
  );
};

export default AddPerson;
