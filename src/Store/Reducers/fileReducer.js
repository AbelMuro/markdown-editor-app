const initialState = "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"

//i need to find a way to create a new document
export default function fileReducer(file = {text: initialState, name: 'welcome.md', unsaved: false}, action) {

    switch(action.type){
        case 'UPDATE_FILE_TEXT':
            return {text: action.text, name: file.name, unsaved: true};
        case 'UPDATE_FILE_NAME':
            return {text: file.text, name: action.name, unsaved: true};
        case 'CLEAR_FILE':
            return {text: '', name: 'untitled.md', unsaved: false}
        case 'SAVE_FILE':
            return {...file, unsaved: false}
        case 'OPEN_FILE': 
            return {text: action.text, name: action.name, unsaved: false}
        case 'NEW_FILE':
            return {text: '', name: 'untitled.md', unsaved: false}
        default: 
            return file;
    }
}