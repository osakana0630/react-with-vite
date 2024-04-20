import { BasicLayout } from "../layouts/BasicLayout";
import { Button } from "../button";
import { useLoginUserInfoState } from "../providers/LoginUserInfo";

export const UserProfilePage = () => {
  const { value } = useLoginUserInfoState();
  console.log(value);
  return (
    <BasicLayout>
      <div>
        <div>
          <Button variant="large">テスト</Button>
          <Button variant="medium">テスト</Button>
          <Button variant="small">テスト</Button>
        </div>
        <div>
          <Button variant="large" theme="dark">
            テスト
          </Button>
          <Button variant="medium" theme="light">
            テスト
          </Button>
          <Button variant="small" theme="blue">
            テスト
          </Button>
        </div>
      </div>
    </BasicLayout>
  );
};
