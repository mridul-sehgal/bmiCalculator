/* eslint-disable react/prop-types */

function Input({ name, value, changeHandler }) {
  return (
    <div className="w-full flex justify-center">
      <input
        type="number"
        placeholder={name}
        value={value}
        className=" w-1/2 h-12  m-4 rounded-xl text-center "
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
