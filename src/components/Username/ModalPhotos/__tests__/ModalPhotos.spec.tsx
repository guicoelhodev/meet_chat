import { fireEvent, render, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { ModalPhotos } from "..";
import { avatarList } from "src/data/avatarsList";
import { userStore } from "src/store/userStore";

describe("Test ModalPhotos component", () => {
  test("Should be not render the component when isModalOpen is false", () => {
    const { queryByLabelText } = render(
      <ModalPhotos isModalOpen={false} setIsModalOpen={vi.fn()} />
    );

    const divRender = queryByLabelText("modal_photos");

    expect(divRender).not.toBeInTheDocument();
  });

  test("Should be render the avatarList correctly", () => {
    const { getByLabelText } = render(
      <ModalPhotos isModalOpen={true} setIsModalOpen={vi.fn()} />
    );

    Object.values(avatarList).forEach((item) => {
      const liLabelText = getByLabelText(item.name);

      expect(liLabelText).toBeInTheDocument();
    });
  });

  test("Should be change username when type a new value", () => {
    const { result } = renderHook(() => userStore());

    const { getByTestId } = render(
      <ModalPhotos isModalOpen={true} setIsModalOpen={vi.fn()} />
    );

    const inputUserName = getByTestId(/username-input/);

    fireEvent.change(inputUserName, { target: { value: "John Doe" } });
    fireEvent.blur(inputUserName);

    expect(result.current.userName).toBe("John Doe");
  });

  // test("Should call handleAvatar when avatar is double-clicked", () => {
  //   const handleAvatarSpy = jest.fn();
  //   const { result } = renderHook(() => userStore());
  //   const { getByLabelText } = render(
  //     <ModalPhotos isModalOpen={true} setIsModalOpen={jest.fn()} />
  //   );
  //   const catItemAvatar = getByLabelText("cat");

  //   act(() => {
  //     fireEvent.doubleClick(catItemAvatar);
  //   });

  //   expect(handleAvatarSpy).not.toBeCalled();

  //   act(() => {
  //     jest
  //       .spyOn(result.current, "handleAvatar")
  //       .mockImplementation(handleAvatarSpy);
  //     fireEvent.doubleClick(catItemAvatar);
  //   });

  //   expect(handleAvatarSpy).toBeCalled();
  // });
});
