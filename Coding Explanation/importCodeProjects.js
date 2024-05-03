class importHtml extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--HTML Explanation Code-->
        <div id="htmlExplanationCode">
            <div class="bothAreaLR">
                <div class="codeAreaLeftContainer">
                    <div class="codeAreaLeft" id="codeArea1">
                        <!--<textarea readonly class="textareaClass" id="textarea1">-->
                            <pre class="codePreDisplay">
                            <button class="copyText" onclick="copyToClipboard()">Copy</button>
                                <code class="language-html codeDisplay" id="copyThis">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
    &lt;title&gt;Coding Explanation&lt;/title&gt;
&lt;/head&gt;                   </code>
                            </pre>
                        <!--</textarea>-->
                    </div> 
                </div>
                <div class="explanationAreaRightContainer">
                    <div class="explanationAreaRight" id="explanationArea1">
                        <p>
                            Starting off with &lt;!DOCTYPE html&gt;, this is used to tell the browser what document type to expect.
                            <br>
                            &lt;html lang="en"&gt; declares the language the code is written in to the browser.
                            <br>
                            the &lt;head&gt; element contains the metadata of the website and links to stylesheets and scripts. 
                        </p>
                    </div>
                </div>
            </div> 
    
            <div class="bothAreaRL">
                <div class="explanationAreaLeftContainer">
                    <div class="explanationAreaLeft" id="explanationArea2">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ducimus quos alias totam aliquid inventore voluptate ad fuga, iure veritatis nam tenetur a atque omnis nemo, sunt cupiditate provident. Architecto!
                        </p>
                    </div>
                </div>
                <div class="codeAreaRightContainer">
                    <div class="codeAreaRight" id="codeArea2">
                    <!--<textarea readonly class="textareaClass" id="textarea2">-->
                        <pre class="codePreDisplay">
                            <code class="language-html codeDisplay">
    &lt;body>
    &lt;div class="bothAreaA">
        &lt;div class="codeAreaLeft" id="codeArea1">
            &lt;textarea readonly class="textareaClass" id="textarea1">
&amp;lt;!DOCTYPE html&amp;gt;
&amp;lt;html lang="en"&amp;gt;
&amp;lt;head&amp;gt;
    &amp;lt;meta charset="UTF-8"&amp;gt;
    &amp;lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&amp;gt;
    &amp;lt;link rel="stylesheet" href="style.css"&amp;gt;
    &amp;lt;title&gt;Coding Explanation&lt;/title&amp;gt;
&amp;lt;/head&amp;gt;
            &lt;/textarea&gt;
        &lt;/div&gt;
        &lt;div class="explanationAreaRight" id="explanationArea1"&gt;
            &lt;p&gt;
                Starting off with &amp;lt;!DOCTYPE html&amp;gt;, this is used to tell the browser what document type to expect.
                &amp;lt;br&amp;gt;
                &amp;lt;html lang="en"&amp;gt; declares the language the code is written in to the browser.
                &amp;lt;br&amp;gt;
                the &amp;lt;head&amp;gt; element contains the metadata of the website and links to stylesheets and scripts. 
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        <!--End HTML Explanation-->`
    }
}

class importCss extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        Css Explanation`
    }
}

class importJavascipt extends HTMLElement {
    connectedCallback() {
        fetch("./explanations/javascript-explanation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch HTML content');
            }
            return response.text();
        })
        .then(javascriptContent => {
            this.innerHTML = javascriptContent;
        })
        .catch(error => {
            console.error('Error loading HTML content:', error);
        });
    }
}

class importCsharp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        C# Explanation`
    }
}

class importPython extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        Python Explanation`
    }
}

customElements.define("html-explanation", importHtml);
customElements.define("css-explanation", importCss);
customElements.define("javascript-explanation", importJavascipt);
customElements.define("csharp-explanation", importCsharp);
customElements.define("python-explanation", importPython);



/* BIN 
class importJavascipt extends HTMLElement {
    connectedCallback() {
        fetch("./explanations/javascript-explanation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch HTML content');
            }
            return response.text();
        })
        .then(javascriptContent => {
            // Wrap the fetched content with <pre><code> tags
            const codeElement = document.createElement('code');
            codeElement.textContent = javascriptContent.trim();
            const preElement = document.createElement('pre');
            preElement.appendChild(codeElement);
            this.appendChild(preElement);
            // Initialize Highlight.js on the newly added code element
            hljs.highlightBlock(codeElement);
        })
        .catch(error => {
            console.error('Error loading HTML content:', error);
        });
    }
}
*/