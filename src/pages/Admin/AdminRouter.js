import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {AdminLayout, Dashboard} from '../Admin/'
import {User, UserAdd, UserEdit} from '../Admin/User'
import { Cocktail, CocktailAdd, CocktailEdit} from '../Admin/Cocktail'
import Error from '../../_Utiles/Error'
const AdminRouter = () => {
    return (
        <div>
        <Routes>
             
                <Route element={<AdminLayout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path='dashboard' element={<Dashboard/>} />

                        <Route path='user'>
                           <Route path='index' element={<User/>} />
                           <Route path='edit/:uid' element={<UserEdit/>}/>
                           <Route path='add' element={<UserAdd/>} />
                          
                         </Route>

                         <Route path='cocktail'>
                            <Route path='index' element={<Cocktail/>} />
                            <Route path='edit' element={<CocktailEdit/>}/>
                            <Route path='add'  element={<CocktailAdd/>}/>
                         </Route>
                       <Route path='*' element={<Error/>} />
                </Route>
        </Routes>
        </div>
    );
};

export default AdminRouter;