import { ObjectType, Field } from "@nestjs/graphql";
import { UserPromoteInput } from "./UserPromoteInput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType()
class UserPromoteArgs {
    @Field(() => UserPromoteInput)
    @ApiProperty({
        required: true,
        type: () => UserPromoteInput
    })
    @Type(() => UserPromoteInput)
    data: UserPromoteInput;
}

export { UserPromoteArgs as UserPromoteArgs };