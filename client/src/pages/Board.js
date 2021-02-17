import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../styles/board.css';

  function Board() {
    return (
      <section className="boardWrap">
        <h2>게시판</h2>
        <div className='container'>
          <div className="textGroup">
            <h3>제목</h3>
            <div class="contents">
              내용
            </div>
          </div>
          <div className='formWrapper'>
            <input className="title" type='text' placeholder='제목' />
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
            <button className="submitButton">입력</button>
          </div>
        </div>
      </section>
    )
  }

export default Board;
