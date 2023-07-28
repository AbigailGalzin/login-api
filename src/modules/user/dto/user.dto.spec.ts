import { UserDto } from './user.dto.js';

describe('CreateUserDtoTs', () => {
  it('should be defined', () => {
    expect(new UserDto()).toBeDefined();
  });
});
