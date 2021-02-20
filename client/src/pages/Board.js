import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import '../styles/board.css';

  function Board() {

    const [boardContent, setBoardContent] = useState({
      title: '',
      content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = (e) => {
      const {name ,value } = e.target;
      setBoardContent({
        ...boardContent,
        [name] : value
      })
      console.log(boardContent);
    };

    return (
      <section className="boardWrap">
        <h2>게시판</h2>
        <div className='container'>
          <div className="textGroup">
          {viewContent.map(element => 
              <>
                <h3>{element.title}</h3>
                <div className="contents">
                  {ReactHtmlParser(element.content)}
                </div>
              </>
          )}
          </div>
          <div className='formWrapper'>
            <input className="title" type='text' placeholder='제목' name='title'
              onChange={getValue}
            />
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setBoardContent({
                  ...boardContent,
                  content: data
                })
                console.log(boardContent);

              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
            <button className="submitButton"
              onClick={() => {
                setViewContent(viewContent.concat({...boardContent}))
              }}
            >입력</button>
          </div>
        </div>
      </section>
    )
  }

export default Board;
