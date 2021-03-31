import React from 'react';

const ListWidget = ({widget, editing, setEditing}) => {

  const changeTextarea = (text) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.text = text;
    setEditing([...withoutCurrWidget, widget])
  }

  const changeOrdered = (target) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    const currWidget = editing.find(w => w.id === widget.id);
    if (target.checked) {
      currWidget.value = 'ORDERED';
    } else {
      currWidget.value = 'UNORDERED';
    }
    setEditing([...withoutCurrWidget, currWidget]);
  }

  return (
      <div>
        {
          !editing.includes(widget) && (widget.value === 'UNORDERED' || widget.value === '') &&
          <ul>
            {
              widget.text.split('\n').map(line => <li key={Math.round(Math.random() * 9999)}>{line}</li>)
            }
          </ul>

        }
        {
          !editing.includes(widget) && widget.value === 'ORDERED' &&
          <ol>
            {
              widget.text.split('\n').map(line => <li key={Math.round(Math.random() * 9999)}>{line}</li>)
            }
          </ol>
        }
        {
          editing.includes(widget) &&
          <div>
            <label>
              Ordered
              <input type='checkbox'
                     name='Ordered'
                     checked={widget.value === 'ORDERED'}
                     onChange={e => changeOrdered(e.target)}/>
            </label>
            <br/>
            <label htmlFor='list-items'>List Items</label>
            <textarea
                onChange={e => changeTextarea(e.target.value)}
                value={widget.text}
                className='form-control'
                rows={4}
                id='list-items'/>
          </div>
        }
      </div>
  );
}

export default ListWidget;
