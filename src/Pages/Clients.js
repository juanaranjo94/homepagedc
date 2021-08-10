import React from 'react';
import SecBanner from '../components/Banner/SecBanner';
import ListClients from '../components/Clients/ListClients';





const Clients = () => {
    return(
        <div className="body_wrapper clients menu_white">
            <SecBanner
                    title="titleClients" 
                    txt_d="txt_dClients"/>
            <ListClients
                dClient1 = "dClient1"
                dClient2 = "dClient2"
                dClient3 = "dClient3"
                dClient4 = "dClient4"
                dClient5 = "dClient5"
                dClient6 = "dClient6"
                dClient7 = "dClient7"
                item1 = "item1"
                item2 = "item2"
                item3 = "item3"
            />
        </div>
    )
}
export default Clients;