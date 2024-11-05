export default function History() {
    return (
        <>
            <div class="container mt-5">
                <h1>Order History</h1>

                <div id="loadingBox" style={{display: "none"}} class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

                <div id="messageBox" style={{display: "none"}} class="alert alert-danger" role="alert">
                    Error loading order history
                </div>

                <table class="table table-bordered mt-3" id="orderTable" style={{display: "none"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Delivered</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="orderBody">
                        {/* <!-- Order rows will be dynamically populated here --> */}
                    </tbody>
                </table>
            </div>
        </>
    )
}