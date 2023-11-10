export const Contact = ({ contactName, contactTel, onDelete, id }) => {
  return (
    <div>
      <p>
        {contactName}: {contactTel}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
