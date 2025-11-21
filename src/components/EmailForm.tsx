import React, { useState } from "react";
import "../css/EmailForm.css";


const EmailForm: React.FC = () => {
  const [checkedRecipients, setCheckedRecipients] = useState<string[]>([]);

  const recipients = ["Alice", "Bob", "David", "Eve", "Jeffrey"];

  const handleCheckboxChange = (name: string) => {
    setCheckedRecipients((prev) =>
      prev.includes(name)
        ? prev.filter((r) => r !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="email-form">

      {/* FROM field */}
      <div className="form-row">
        <label className="input-label">FROM:</label>
        <input type="email"/>
      </div>

<div className="form-row">
  <label className="input-label">TO:</label>
  <div className="checkbox-group-horizontal">
    {recipients.map((name) => (
      <label key={name} className="checkbox-label">
        <input
          type="checkbox"
          checked={checkedRecipients.includes(name)}
          onChange={() => handleCheckboxChange(name)}
        />
        {name}
      </label>
    ))}
  </div>
</div>


      {/* CC field */}
      <div className="form-row">
        <label className="input-label">CC:</label>
        <input type="email" placeholder="you can add multiple emails like this -> email_1@company.com;email_2@company.com"/>
      </div>

      {/* SUBJECT field */}
      <div className="form-row">
        <label className="input-label">SUBJECT:</label>
        <input type="text" />
      </div>

      

      {/* SUPPLIER and MESSAGE field */}
        <div className="form-row horizontal-message-row">

        <div className="supplier-column">
            
            <textarea placeholder="List suppliers here..." />
        </div>   
        <div className="message-column">
            
            <textarea placeholder="Type your message here..." />
        </div>

 
        </div>

    </div>
  );
};

export default EmailForm;
