import { LikeComponent } from "./like.component";
import { componentModuleUrl } from "@angular/compiler";

describe('a like component test suites', () => {

  let component: LikeComponent;

  beforeEach(() => {
    component = new LikeComponent;
  });

  it('should toggle the like property if i click it', () => {
    component.iLike = true;
    component.click();
    expect(component.iLike).toBeFalsy;
  })

  it('if clicked the totalLikes is incremented by 1 if its not a like previously', () => {
    component.iLike = false;
    component.totalLikes = 0;
    component.click();
    expect(component.totalLikes).toBe(1);
  })

  it('if clicked the totalLikes is decremented by 1 if its a like previously', () => {
    component.iLike = true;
    component.totalLikes = 0;
    component.click();
    expect(component.totalLikes).toBe(-1);
  })
})