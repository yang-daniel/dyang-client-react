
import React from 'react'

const ParagraphWidget = ({widget, editing, newText, setNewText, newType, setNewType}) => {
  return(
      <>
        {
          editing &&
          <>
            <select value={newType} onChange={(event) => setNewType(event.target.value)}
                    className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>

            </select>

            <textarea rows="4" cols="50" value={newText} onChange={(event) =>
                setNewText(event.target.value)} className="form-control" ></textarea>
          </>
        }
        {
          !editing &&
          <p>
            {widget.text}
          </p>
        }
      </>
  )
}

export default ParagraphWidget