import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from '..';

test('Button is rendered with title: Test button', () => {
  const onEventPressMock = jest.fn();
  const {getByTestId, getByText} = render(
    <Button title="Test button" onPress={onEventPressMock} />,
  );

  const btn = getByTestId('button-common');
  const btnText = getByTestId('button-text-common');
  const elByText = getByText('Test button');

  expect(btn).toBeDefined();
  expect(btnText).toBeDefined();
  expect(elByText).toBeDefined();

  expect(elByText.children[0]).toBe('Test button');
});
