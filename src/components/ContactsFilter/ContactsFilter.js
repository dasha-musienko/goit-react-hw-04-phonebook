export const ContactsFilter = ({ onFilter }) => {
  return (
    <div>
      <input type="text" onChange={evt => onFilter(evt.target.value)} />
    </div>
  );
};
