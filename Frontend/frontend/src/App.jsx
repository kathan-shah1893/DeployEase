import { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
    const [gitURL, setGitURL] = useState('');
    const [slug, setSlug] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = slug ? { gitURL, slug } : { gitURL };
        try {
            const res = await axios.post('http://localhost:9000/project', payload);
            console.log("payload",payload)
            console.log(res.data)
            setResponse(res.data);
        } catch (error) {
            console.error('Error submitting the form', error);
            setResponse({ error: 'Failed to create project' });
        }
    };

    return (
        <div className="container">
            <h1>Project Builder</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gitURL">Git URL</label>
                    <input
                        type="url"
                        id="gitURL"
                        value={gitURL}
                        onChange={(e) => setGitURL(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug (Optional)</label>
                    <input
                        type="text"
                        id="slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div className="response">
                    {response.error ? (
                        <p className="error">{response.error}</p>
                    ) : (
                        <div>
                            <p>Status: {response.status}</p>
                            <p>Project Slug: {response.data.projectSlug}</p>
                            <p>URL: <a href={response.data.url} target="_blank" rel="noopener noreferrer">{response.data.url}</a></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
