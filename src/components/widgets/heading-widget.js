import React from 'react';

const HeadingWidget = ({widget, editing, setEditing}) => {

  const changeSize = (size) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.size = Number(size);
    setEditing([...withoutCurrWidget, widget]);
  }

  const changeText = (text) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.text = text;
    setEditing([...withoutCurrWidget, widget]);
  }

  return (
      <div>
        {!editing.includes(widget) && widget.size === 1 && <h1>{widget.text}</h1>}
        {!editing.includes(widget) && widget.size === 2 && <h2>{widget.text}</h2>}
        {!editing.includes(widget) && widget.size === 3 && <h3>{widget.text}</h3>}
        {!editing.includes(widget) && widget.size === 4 && <h4>{widget.text}</h4>}
        {!editing.includes(widget) && widget.size === 5 && <h5>{widget.text}</h5>}
        {!editing.includes(widget) && widget.size === 6 && <h6>{widget.text}</h6>}
        {
          editing.includes(widget) &&
          <div>
            <input className='form-control mb-2'
                   value={widget.text}
                   onChange={e => changeText(e.target.value)}/>
            <select className='form-control' value={widget.size}
                    onChange={e => changeSize(e.target.value)}>

              <option value={1}>Header size 1</option>
              <option value={2}>Header size 2</option>
              <option value={3}>Header size 3</option>
              <option value={4}>Header size 4</option>
              <option value={5}>Header size 5</option>
              <option value={6}>Header size 6</option>

            </select>
          </div>
        }
      </div>
  )
}

export default HeadingWidget;
