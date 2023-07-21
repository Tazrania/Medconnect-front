import './ResultSearchDoc.css';

export default function ResultSearchDoc({ results }) {
    return (
    <div className="result-search-doc">
    {results && results.length > 0 ? (
        <ul>
        {results.map((result, index) => (
            <li key={index}>{result}</li>
        ))}
        </ul>
    ) : (
        <p className='affiche-rslt'>Aucun résultat disponible.</p>
    )}
    </div>
    );
}
