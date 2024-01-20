import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@ObjectType()
class UserPromoteInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id: string;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => [String])
    names: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    score: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    weightedScore: number;

    @Field(() => GraphQLJSON)
    extendedProfile: InputJsonValue;

    @Field(() => UserPromoteInput)
    @ApiProperty({
        required: true,
        type: () => UserPromoteInput
    })
    @Type(() => UserPromoteInput)
    selfReference: UserPromoteInput;

    @Field(() => UserPromoteInput)
    @ApiProperty({
        required: true,
        type: () => UserPromoteInput
    })
    @Type(() => UserPromoteInput)
    selfReferenceArray: UserPromoteInput;

    @Field(() => Date)
    @Type(() => Date)
    lastLogin: Date;

    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    isAdmin: boolean;
}

export { UserPromoteInput as UserPromoteInput };