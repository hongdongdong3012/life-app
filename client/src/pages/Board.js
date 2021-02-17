import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import '../styles/board.css';

  function Board() {
    const [movieContent, setMovieContent] = useState({
      title: '',
      content: ''
    })

    const [viewContent, setViewContent] = useState([])

    const getValue = e => {
      const { name, value } = e.target;
      setMovieContent({
        ...movieContent,
        [name]: value
      })
      console.log(movieContent);
    }



    return (
      <section className="boardWrap">
        <h2>게시판</h2>
        <div className='container'>
          <div className="textGroup">
            {viewContent.map(e => 
              <>
                <h3>{e.title}</h3>
                <div className="contents">
                  {ReactHtmlParser(e.content)}
                </div>
              </>
            )}
          </div>
          <div className='formWrapper'>
            <input className="title" type='text' placeholder='제목' onChange={getValue} name='title'/>
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
                setMovieContent({
                  ...movieContent,
                  content: data
                })
                console.log(movieContent);
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
              setViewContent(viewContent.concat({...movieContent}))
            }}
            >입력</button>
          </div>
        </div>
      </section>
    )
  }

export default Board;
