export class LikeComponent { 
    likesCount: number;
    isSelected: boolean;

    constructor(likesCount: number, isSelected: boolean){     
    }

    onClick(){
        this.likesCount += (this.isSelected) ? 1: -1;
        this.isSelected = !this.isSelected;
    }

}