import { Heading, Avatar, Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import NavBarContainer from "./NavBarContainer";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const { data: session } = useSession();

  const handleSignIn = () => signIn();

  return (
    <NavBarContainer {...props}>
      <Heading as="h1" fontSize="2rem" color="black">
        HeapUnderflow
      </Heading>
      {session ? (
        <Avatar
          name={session.user?.name || ""}
          src={session.user?.image || ""}
        />
      ) : (
        <Button color="black" onClick={handleSignIn}>
          Sign in
        </Button>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
