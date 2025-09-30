export default function Offline() {
    return (
        <div className="container sticky-bottom">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                You are currently offline. Displayed information may be out-of-date.
            </div>
        </div>
    );
}