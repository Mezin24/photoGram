import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUserAuth } from '@/context/userAuthContext';
import { UserLogIn } from '@/types';
import { useCallback, useState, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState: UserLogIn = {
  email: '',
  password: '',
};

export const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<UserLogIn>(initialState);
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const onHandleSubmit = useCallback(async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(`user: ${userLoginInfo}`);
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }, []);

  const onHandleGoogleSignIn = useCallback(async () => {
    try {
      console.log(`user: ${userLoginInfo}`);
      await logIn(userLoginInfo.email, userLoginInfo.password);
      navigate('/');
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }, []);

  return (
    <div className='bg-slate-800 w-full h-screen'>
      <div className='container mx-auto p-6 flex h-full'>
        <div className='flex justify-center items-center w-full'>
          {/* <div className="p-6 w-2/3 hidden lg:block">
              <div className="grid grid-cols-2 gap-2">
                <img
                  className=" w-2/3 h-auto aspect-video rounded-3xl place-self-end"
                  src={image2}
                />
                <img
                  className=" w-2/4 h-auto aspect-auto rounded-3xl"
                  src={image1}
                />
                <img
                  className=" w-2/4 h-auto aspect-auto rounded-3xl place-self-end"
                  src={image4}
                />
                <img
                  className=" w-2/3 h-auto aspect-video rounded-3xl"
                  src={image3}
                />
              </div>
            </div> */}
          <div className='max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm'>
            <Card>
              <form onSubmit={onHandleSubmit}>
                <CardHeader className='space-y-1'>
                  <CardTitle className='text-2xl text-center mb-4'>
                    PhotoGram
                  </CardTitle>
                  <CardDescription>
                    Enter your email below to login in photoGram
                  </CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                  <div className='grid'>
                    <Button variant='outline' onClick={onHandleGoogleSignIn}>
                      <Icons.google className='mr-2 h-4 w-4' />
                      Google
                    </Button>
                  </div>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='bg-background px-2 text-muted-foreground'>
                        Or
                      </span>
                    </div>
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email address</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='dipesh@example.com'
                      value={userLoginInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({
                          ...userLoginInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                      id='password'
                      type='password'
                      placeholder='Password'
                      value={userLoginInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({
                          ...userLoginInfo,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter className='flex flex-col'>
                  <Button className='w-full' type='submit'>
                    Sign Up
                  </Button>
                  <p className='mt-3 text-sm text-center'>
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
