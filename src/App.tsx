import NavBar from "./modules/layouts/pages/navbar/NavBar";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./modules/layouts/pages/not-found/NotFound";
import {Home} from "./modules/layouts/pages/home/Home";
import {AdminContact} from "./modules/contacts/pages/contact-admin/AdminContact";
import {AddContact} from "./modules/contacts/pages/add-contact/AddContact";
import {EditContact} from "./modules/contacts/pages/edit-contact/EditContact";
import {ViewContact} from "./modules/contacts/pages/view-contact/ViewContact";
import {ToastContainer} from "react-toastify";

const App: React.FC = () => {
    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/contacts/admin'} element={<AdminContact/>}/>
                    <Route path={'/contacts/add'} element={<AddContact/>}/>
                    <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
                    <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
