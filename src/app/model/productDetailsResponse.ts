/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetProductImageResponse } from './getProductImageResponse';


export interface ProductDetailsResponse { 
    brandName?: string;
    categoryName?: string;
    colorName?: string;
    description?: string;
    id?: number;
    images?: Array<GetProductImageResponse>;
    name?: string;
    price?: number;
    size?: string;
    stock?: number;
}
