#include <iostream>
using namespace std;

void playground(int level)
{
    cout << "Level " + level;
    cout << endl;
    int n;
    switch (level)
    {
        case 1:
            n=20;
            break;
        
        case 2:
            n=40;
            break;

        default:
            break;
    }
    int width = n; 
    int length = width/2;
    int x = 1,y = 1;
    for (int i=0; i<=length ; i++)
    {
        if (i==0 || i==length) 
        {
            for (int j=0; j<=width+2 ; j++)
            {
                cout << "*";
            }
        }
        else 
        {
            cout << "*";
            for (int j=0; j<=width ; j++)
            {
                cout << " ";
            } 
            cout << "*";
        }
        cout << "\n";
    }
    // switch (level)
    // {
    //     case 1:


    // }
}

// Function to handle user UserInput 
void UserInput() 
{ 
    // Checks if a key is pressed or not 
    if (_kbhit()) { 
        // Getting the pressed key 
        switch (_getch()) { 
        case 'a': 
            sDir = LEFT; 
            break; 
        case 'd': 
            sDir = RIGHT; 
            break; 
        case 'w': 
            sDir = UP; 
            break; 
        case 's': 
            sDir = DOWN; 
            break; 
        case 'x': 
            isGameOver = true; 
            break; 
        } 
    } 
}


int main()
{
    string PlayerName;
    //cout << "your name : ";
    //cin >> PlayerName;
    //return 0;
    
}