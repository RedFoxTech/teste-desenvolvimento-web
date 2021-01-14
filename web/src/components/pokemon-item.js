import Pokeball from '../Icons/patterns/Pokeball';
import Dragon from '../Icons/types/Dragon';
import Fire from '../Icons/types/Fire';
import './item.css';

function PokeItem(){
    return(
        <>
            <div class="card">
                <div class="row">
                    <div class='col-sm'>
                        <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                    </div>
                    <div class='col-sm mt-1'>
                        <h7>pokemon_name</h7>
                        <p> weather1, weather2</p>
                    </div>
                    <div class='col-sm center'>
                        <Fire fill="#FFF" width="25" height="25"/>
                        <Dragon fill="#FFF" width="25" height="25"/>
                    </div>
                </div>
            </div>

        </>
        )
}

export default PokeItem;