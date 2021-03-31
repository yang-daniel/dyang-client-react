import React from 'react';

const ImageWidget = ({widget, editing, setEditing}) => {

  const changeUrl = (newUrl) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.url = newUrl;
    setEditing([...withoutCurrWidget, widget])
  }

  const changeWidth = (num) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.width = Number(num);
    setEditing([...withoutCurrWidget, widget])
  }

  const changeHeight = (num) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.height = Number(num);
    setEditing([...withoutCurrWidget, widget])
  }

  return (
      <div>
        {
          !editing.includes(widget) &&
          <img src={widget.url}
               width={widget.width}
               height={widget.height}
               alt={widget.url}/>
        }
        {
          editing.includes(widget) &&
          <div>
            <div className='form-group'>
              <label htmlFor='imageInput'>Image URL</label>
              <input type='url'
                     className='form-control block'
                     value={widget.url}
                     onChange={e => changeUrl(e.target.value)}
                     id='imageInput'/>
            </div>
            <div className='form-group'>
              <label htmlFor='widthInput'>Image Width</label>
              <input type='number'
                     className='form-control'
                     value={widget.width}
                     onChange={e => changeWidth(e.target.value)}
                     id='widthInput'/>
            </div>
            <div className='form-group'>
              <label htmlFor='heightInput'>Image Height</label>
              <input type='number'
                     className='form-control'
                     value={widget.height}
                     onChange={e => changeHeight(e.target.value)}
                     name='heightInput'/>
            </div>
          </div>
        }
      </div>
  );
}

export default ImageWidget;