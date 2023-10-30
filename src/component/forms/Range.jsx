export function Range({ id, label, min, max }) {
  return (
    <div>
      <input id={id} type="range" className="form-range" min={min} max={max} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
