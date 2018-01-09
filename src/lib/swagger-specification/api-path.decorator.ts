import { SwaggerService } from "./swagger.service";
export interface IApiPathArgs {
    path: string;
    name: string;
    description: string;
}
export function ApiPath( args: IApiPathArgs ): ClassDecorator {
    return function ( target: any ) {
        SwaggerService.addPath( args, target );
    }
}