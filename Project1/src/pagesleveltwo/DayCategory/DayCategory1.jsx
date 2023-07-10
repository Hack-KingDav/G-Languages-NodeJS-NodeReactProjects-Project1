import React from 'react';

const DayCategory1 = () =>{
    return (
        <div className="box_AdminUser_body"> {/* body */}


                <div className="box_AdminUser_body_sectionA"> {/* body 1 Starts */}
                    
                        {/* <label htmlFor="search_Button">
                        <bold className="search_Button" id="search_Button" >Search</bold>
                    </label> */}
                        {/* <button className="search_Button" id="search_Button" >Search</button> */}
                </div>



                <div className="box_DayCategory_body_sectionB"> {/* body 2 */}

                    <table className="table table-striped-columns">
                        <thead className="DayCategory_table_head">
                            <tr className='table_headding_row'>
                                <th className='table_head1' scope="col">Sno.</th>
                                <th className='table_head1_CategoryName' scope="col">Category Name</th>
                                <th className='table_head1' scope="col">Category Image</th>
                                <th className='table_head1' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr className='table_All_rows'>
                                <td>1</td>
                                <td>Mark</td>
                                <td><img src="" alt="img" /></td>
                                <td>@mdo</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className='table_All_rows'>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        // <div>
        //     <h1>DayCategory1 Page</h1>
        // </div>
    );
}

export default DayCategory1 ;