import React, { useRef } from "react";
import "./leftsection.style.css";
import { Editor } from "@tinymce/tinymce-react";

const Leftsection = (props) => {
	const editorRef = useRef(null);
	async function setJsonData() {
		if (editorRef.current) {
			const parsedData = await JSON.parse(
				editorRef.current.getContent({ format: "text" })
			);
			console.log(parsedData);
			props.setData(parsedData);
		}
	}
	return (
		<div className="leftsection-main">
			<div className="leftsection-title">
				<div>Add json data into this Rich Text Editor</div>
				<button onClick={setJsonData} className="leftsection-submitbtn">
					Load The Json Data
				</button>
			</div>
			<div className="leftsection-textarea">
				<Editor
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue="<p>[]</p>"
					init={{
						height: "100%",
						menubar: false,
						resize: false,
						plugins: [
							"a11ychecker",
							"advlist",
							"advcode",
							"advtable",
							"autolink",
							"checklist",
							"export",
							"lists",
							"link",
							"image",
							"charmap",
							"preview",
							"anchor",
							"searchreplace",
							"visualblocks",
							"powerpaste",
							"fullscreen",
							"formatpainter",
							"insertdatetime",
							"media",
							"table",
							"help",
							"wordcount",
						],
						toolbar:
							"undo redo | casechange blocks | bold italic backcolor | " +
							"alignleft aligncenter alignright alignjustify | " +
							"bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
					}}
				/>
			</div>
		</div>
	);
};

export default Leftsection;
