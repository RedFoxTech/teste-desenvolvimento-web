import { 
    Controller, 
    Post,
    Get,
    Patch,
    Delete, 
    Body, 
    ValidationPipe,
    UseGuards,  
    Param,
    Query,  
    ForbiddenException
     } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonsService } from './pokemons.service';
import { ReturnPokemonDto } from './dto/return-pokemon.dto';
import { FindPokemonsQueryDto } from './dto/find-pokemons-query.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Role } from '../auth/role.decorator';
import { UserRole } from '../users/user-roles.enum';

@ApiTags('pokemons')
@Controller('pokemons')
@UseGuards(AuthGuard(), RolesGuard)
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    @Post()
    @Role(UserRole.ADMIN)
    async createPokemon(
        @Body() createPokemonDto: CreatePokemonDto,
    ): Promise<ReturnPokemonDto> {
        const pokemon = await this.pokemonsService.createPokemon(createPokemonDto);
        return {
        pokemon,
        message: 'Pokemon cadastrado com sucesso.',
        };
    }
    
    @Get(':id')
    async findPokemonById(@Param('id' , ValidationPipe) id: string): Promise<ReturnPokemonDto> {
        const pokemon = await this.pokemonsService.findPokemonById(id);
        return {
        pokemon,
        message: 'Pokemon encontrado',
        };
    }

    @Get()
    // @Role(UserRole.ADMIN)
    async findPokemons(@Query() query: FindPokemonsQueryDto) {
        const found = await this.pokemonsService.findPokemons(query);
        return {
        found,
        message: 'Pokemons encontrados',
        };
    }

    @Patch(':id')
    async updatePokemon(
        @Body(ValidationPipe) updatePokemonDto: UpdatePokemonDto,
        // @GetPokemon() pokemon: Pokemon,
        @Param('id') id: string,
    ) {
        //if (user.role != UserRole.ADMIN && user.id.toString() != id) {
        // throw new ForbiddenException(
        //     'Você não tem autorização para acessar esse recurso',
        //);
        //} else {
        return this.pokemonsService.updatePokemon(updatePokemonDto, id);
        //}
    }

    @Delete(':id')
    async deletePokemon(@Param('id') id: string) {
        await this.pokemonsService.deletePokemon(id);
        return {
        message: 'Pokemon removido com sucesso',
        };
    }

}
