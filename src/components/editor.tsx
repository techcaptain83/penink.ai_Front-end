import { EditorState } from 'draft-js';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';

interface IProps {
    setWords: React.Dispatch<React.SetStateAction<number>>
    setChars: React.Dispatch<React.SetStateAction<number>>
}

const EditorComponent = ({ setChars, setWords }: IProps) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);
    };


    const toolbar = {
        options: ['inline', 'list', 'emoji', 'image', 'history', 'blockType'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
        },
        list: {
            options: ['unordered', 'ordered'],
        },
    };

    const getWordCount = (editorState: EditorState) => {
        const contentState = editorState.getCurrentContent();
        const text = contentState.getPlainText();
        if (text === '') return 0;
        const wordCount = text.split(' ').length;
        return wordCount;
    };

    const getCharCount = (editorState: EditorState) => {
        const contentState = editorState.getCurrentContent();
        const text = contentState.getPlainText();
        const charCount = text.length;
        return charCount;
    };

    useEffect(() => {
        setWords(getWordCount(editorState));
        setChars(getCharCount(editorState));
    }, [editorState])


    return (
        <div className='h-full'>
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper"
                editorClassName="editor p-2 h-[80vh] overflow-y-auto scrollbar-hide"
                toolbarClassName="toolbar absolute bottom-0 w-full flex items-center justify-between z-10"
                toolbar={toolbar}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}

export default EditorComponent;
