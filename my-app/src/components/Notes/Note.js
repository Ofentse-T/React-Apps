export default function Note() {
  return (
    <div className="note" id="note.id">
      <span className="material-symbols-outlined">check_circle</span>
      <div className="title">TITLE</div>
      <div className="text">TEXT</div>
      <div className="note-footer">
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change colour</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add image</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">New Image</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            undo
          </span>
          <span className="tooltip-text">Undo</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            redo
          </span>
          <span className="tooltip-text">Redo</span>
        </div>
      </div>
    </div>
  );
}
