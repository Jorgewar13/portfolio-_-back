import { ContactModel } from './contactModel';

describe('Contact Model', () => {
  it('should be invalid if name is empty', async () => {
    const contact = new ContactModel({
      email: 'test@example.com',
      phone: '1234567890'
    });
    let error;
    try {
      await contact.validate();
    } catch (err) {
      error = err;
    }
    expect(error.errors.name.message).toEqual('El nombre es obligatorio');
  });

  it('should be invalid if email is empty', async () => {
    const contact = new ContactModel({
      name: 'John Doe',
      phone: '1234567890'
    });
    let error;
    try {
      await contact.validate();
    } catch (err) {
      error = err;
    }
    expect(error.errors.email.message).toEqual('El correo electrónico es obligatorio');
  });

  it('should be invalid if phone is empty', async () => {
    const contact = new ContactModel({
      name: 'John Doe',
      email: 'test@example.com'
    });
    let error;
    try {
      await contact.validate();
    } catch (err) {
      error = err;
    }
    expect(error.errors.phone.message).toEqual('El número de teléfono es obligatorio');
  });

  // You can add more tests for other fields and validation rules
});
