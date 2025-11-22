import React from "react";
import type { FormGridProps } from "./Types";
import "../css/FormGrid.css";


const FormGrid: React.FC<FormGridProps> = ({ fields, columns }) => {
  return (
    <div className="form-grid-wrapper">
      <div
        className="form-grid"
        style={
          columns
            ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
            : undefined
        }
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className="form-item"
            style={
              field.spanColumns
                ? { gridColumn: `span ${field.spanColumns}` }
                : undefined
            }
          >
            <label className="form-label" htmlFor={field.name}>
              {field.label}
            </label>

            {field.type === "input" && (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                className="form-input"
              />
            )}

            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows ?? 4}
                className="form-textarea"
              />
            )}

            {field.type === "select" && (
              <select name={field.name} className="form-select">
                {field.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormGrid;
