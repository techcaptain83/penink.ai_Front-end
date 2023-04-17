import { useState } from "react";
import { useTranslation } from "react-i18next";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorComponent from './editor';

const ContentEditor = () => {
    const { t } = useTranslation();
    const [documentTitle, setDocumentTitle] = useState(t('untitled_document'));
    const [words, setWords] = useState<number>(0);
    const [chars, setChars] = useState<number>(0);

    return (
        <div className='rounded-md h-[90vh] mt-4 shadow-lg space-y-3 flex flex-col sm:w-1/2 w-[95%] relative'>
            <div className='bg-primary text-white w-full rounded-t-md py-3 flex items-center justify-between px-3'>
                <input type="text"
                    value={`${documentTitle}`}
                    onChange={(e) => setDocumentTitle(e.target.value)}
                    className="outline-none bg-primary text-white w-1/2"
                />
                <p className="space-x-1">
                    <span>{words} {t('words')}</span>
                    <span>.</span>
                    <span>{chars} {t("characters")}</span>
                </p>
            </div>
            <EditorComponent setChars={setChars} setWords={setWords} />
        </div>
    )
}

export default ContentEditor;
