import React, { Suspense } from "react";
import Page from "../components/Page";

export default function DetailsPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Page />
        </Suspense>
    );
}
