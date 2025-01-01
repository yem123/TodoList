import "../style.css";

const Import = ({ setTasks }) => {
  // Import tasks from a file
  const importTasks = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTasks = JSON.parse(e.target.result);
          if (Array.isArray(importedTasks)) {
            setTasks(importedTasks); // Update the task list
          } else {
            alert("Invalid file format. Please upload a valid JSON file.");
          }
        } catch (error) {
          alert("Error reading file. Please upload a valid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={importTasks}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="import-button" title="Upload">
        <i className="fa-solid fa-upload"></i>
      </label>
    </div>
  );
}

export default Import
