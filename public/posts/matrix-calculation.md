Logged on November 28th, 2025

A C++ project able to perform linear algebra computations including solving system of linear equations, compute nullspace, find determinant. Where everything is connected to a CLI interface

- [github link](https://github.com/2192375d/matrix_calculation)

(Jump to the [stage 3](#matrix-calculation-stage-3) for the actual coding part)

Some screenshots of the calculator

![cli-screenshot8](/assets/posts/matrix-calculation/cli-screenshot8.png)
![cli-screenshot2](/assets/posts/matrix-calculation/cli-screenshot2.png)
![cli-screenshot3](/assets/posts/matrix-calculation/cli-screenshot3.png)
![cli-screenshot9](/assets/posts/matrix-calculation/cli-screenshot9.png)
![cli-screenshot5](/assets/posts/matrix-calculation/cli-screenshot5.png)
![cli-screenshot6](/assets/posts/matrix-calculation/cli-screenshot6.png)
![cli-screenshot7](/assets/posts/matrix-calculation/cli-screenshot7.png)

### purpose

(This part is unnecessarily long so skip it unless that's what you are here for)

This is a project I started during highschool. I was very bored of highschool math (as it was meant to be), and some video from a YouTube channels (called "Struggling Grad Student" I believe?) metioned the concept of linear algebra and the legendary textbook [Linear Algebra Done Right](https://linear.axler.net/).

I started reading that book.

I think by a certain point, I just wasn't able to proceed in reading it, because I didn't even know what the book meant when it tells me to "prove" something. My lack of mathematical maturity back then led me unable to do like 80% of the practice problems, and I could not understand (at all) the solutions online

That's when I realized maybe I should just do some applications out of the concepts instead, as I didn't want to just stop there.

Another reason is that I was kind of looking for working on something tied to object oriented programming? Yeah, I think back then I felt like I can do something like SquareMatrix is a derived class from Matrix, so might as well just make this project

So yeah, that's why this project exists?

### Stage 1 (what I did during highschool)

Very basic stuffs, I had class matrix, with only one property, that is a 2D vector, and a tons of methods. I couldn't really understand why people use encapsulation back then so I just left everything public

My .hpp file sorta looks liked this I believe?

```cpp
#include <vector.h>
using namespace std;

class Matrix {
public:
    std::vector<std::vector<double>> v;


    friend std::ostream &operator<<(std::ostream &out, const Matrix &m);
    friend std::istream &operator>>(std::istream &in, Matrix &m);

    Matrix();
    Matrix(std::vector<std::vector<double>> v);
    Matrix(const Matrix &right);

    Matrix operator+(const Matrix &right) const;
    Matrix operator-(const Matrix &right) const;
    Matrix operator*(const Matrix &right) const;
    bool operator==(const Matrix &right) const;
    friend Matrix operator*(const double &left, const Matrix &right);
};
```

I applied a lot stuffs I just learned from highschool CS course, that is the operator overloading, constructor and default/copy constructor.

I also made the SquareMatrix an inherited class from it with a few more methods like getDerminant.

Oh yeah, speak of determinant, my determinant method back then has a time complexity of O(n!)

```cpp
get_determinant_cofactor_expansion(std::vector<std::vector<double>> matrix) {

    if (matrix.size() == 1) {
        return matrix[0][0];
    }

    else {
        bool first = true;
        double sum = 0;

        for (int i = 0; i < matrix.size(); i++, first = !first) {
            if (std::abs(matrix[0][i]) < MACHINE_EPS) {
                continue;
            }

            std::vector<std::vector<double>> v = matrix;
            v.erase(v.begin());

            for (int j = 0; j < v.size(); j++) {
                v[j].erase(v[j].begin() + i);
            }

            first == true
                ? sum += matrix[0][i] * get_determinant_cofactor_expansion(v)
                : sum -= matrix[0][i] * get_determinant_cofactor_expansion(v);
        }

        return sum;
    }
}
```

I still kept it today, although I definitely will never use it

Yeah that code method implementation, no matter the way how I coded it or the unnecessarily high time complexity; but back then, I felt great for it. I was actually super proud of myself for making this, as this was like the hardest algorithm I ever wrote.

Aside from that I think I was handling all the error case by just returning NULL (I didn't even know what it does lol), instead of throwing exceptions.

But nonetheless there's still some nice coding principles I followed, I was surprised that I actually took my time to write all the documentations for each methods.

(documentation for the + operator)

```cpp
/*
 * The method will return a matrix which is the
 * sum of the two given matrices.
 *
 * If the two given matrices have different sizes,
 * the method will leave a message indicating the
 * input is invalid and returns a 1 by 1 matrix with
 * NULL as it's only value.
 *
 * If the two given matrices have the same size,
 * the method will return the sum of them.
 */
Matrix Matrix::operator+(const Matrix &right) const {
```

I also made a method that calculates rank, cofactor, minor all that, but they don't really serve for any purpose, and were implemented in non polynomial time complexity for no reason.
Those little efforts meant to make my project look nicer were funny, but at least I was having fun.

Luckily, I decided to keep it on Github (just in case it'll be useful sometime in the future), and I'll never regret for doing this.

### Stage 2 (the second try)

Ever since I took linear algebra 1, there's multiple times when I just wanna restart working on this project

I attempted to restart working on this-with two friends-and turn it as a web program, but I ended up wasting their time because of my lack determination, understandings about java, and my terrible time management (and me wasting time playing badminton).

Later on I attempted to restart again and gave up cause coding the basic code structure is just too boring.

Until two months ago (early October 2025?), I decided to proceed.

The Main motivation is that I see two courses have applications tied to this project, where the two courses are [linear algebra 2](https://utsc.calendar.utoronto.ca/course/matb24h3) and [introduction to numerical algorithms for computational mathematics](https://utsc.calendar.utoronto.ca/course/cscc37h3).

Unlike previous attempts, I decided to straight up use my highschool codes, with the my first goal of implementing [Gaussian Elimination](https://en.wikipedia.org/wiki/Gaussian_elimination)

I started by making my codes better. Removed all the "using namespace ...", made use of exception to handle error, changed most of the int to size_t, and added encapsulation

<h3 id="matrix-calculation-stage-3">Stage 3 (handle datatype)</h3>

Welp, adding encapsulation just means, I have to add a set_[something], get_[something] method for everything on earth.

I wrote the basic ones like get_data() that literally just returns a 2D vector representing the matrix, get_entry() which does obvious things; while adding more getter/setter methods whenever I find necessary. Every method conforms to the following datatype invariant (fancy term I learned from a really nice prof)

- Matrix: 2D vector v is always rectangular
- SquareMatrix (extends Matrix): 2D vector v is always rectangular and square
- TriangularMatrix (extends Matrix): 2D vector v is always rectangular and either upper or lower triangular
- Vector (extends Matrix): 2D vector v is always rectangular and have one column only

I came to the realization that if I keep the constructor throwing an exception whenever necessary, this invariant will practically never break

```cpp
Matrix::Matrix(std::vector<std::vector<double>> v) {
    if (v.empty()) {
        throw std::invalid_argument("class Matrix: constructor: input "
                                    "matrix is empty");
    }

    int expected_size = v[0].size();
    for (size_t i = 0; i < v.size(); i++) {
        if (v[i].size() == 0 or v[i].size() != expected_size) {
            throw std::invalid_argument("class Matrix: constructor: input "
                                        "matrix is not an n by m vector");
        }
    }

    this->v = v;
}
```

(Given that I won't accidently create a nonrectangular matrix from other methods, which should never happen)

I made use of static methods for getting 0 matrix and identity matrix:

```cpp
Matrix Matrix::get_zero_matrix(size_t num_row, size_t num_col) {

    std::vector<std::vector<double>> v(num_row,
                                       std::vector<double>(num_col, 0.0));

    return Matrix(v);
}

Matrix Matrix::get_identity(size_t num_row, size_t num_col) {
    std::vector<std::vector<double>> I;
    I.assign(num_row, std::vector<double>(num_col, 0.0));
    const size_t N = std::min(num_row, num_col);
    for (std::size_t i = 0; i < N; i++) {
        I[i][i] = 1.0;
    }
    return Matrix(I);
}
```

I end up with an API that looks like:

```cpp
class Matrix {
  protected:
    std::vector<std::vector<double>> v;

  public:
    friend std::ostream &operator<<(std::ostream &out, const Matrix &m);
    friend std::istream &operator>>(std::istream &in, Matrix &m);

    Matrix();
    Matrix(std::vector<std::vector<double>> v);
    Matrix(const Matrix &right);

    static Matrix get_zero_matrix(size_t num_row, size_t num_col);
    static Matrix get_identity(size_t num_row, size_t num_col);

    size_t get_num_row() const;
    size_t get_num_col() const;

    std::vector<std::vector<double>> get_data() const;
    double get_entry(size_t i, size_t j) const;

    std::vector<double> get_row(size_t row_num) const;
    std::vector<double> get_col(size_t col_num) const;
    void set_row(size_t row_num, const std::vector<double> &row);
    void set_col(size_t col_num, const std::vector<double> &col);
    void set_entry(size_t i, size_t j, double val);

    bool is_zero_row(size_t row_num) const;
    bool is_square() const;

    void row_operation_add(size_t source_row, size_t to_add_row, double scalar);
    void row_operation_multiply(size_t source_row, double scalar);
    void row_operation_swap(size_t row1, size_t row2);

    Matrix operator+(const Matrix &right) const;
    Matrix operator-(const Matrix &right) const;
    Matrix operator*(const Matrix &right) const;
    bool operator==(const Matrix &right) const;
    friend Matrix operator*(const double &left, const Matrix &right);

    Matrix transpose() const;
    std::tuple<Matrix, Matrix, Matrix> LU_factorization() const;
    // Matrix get_image_basis() const;

    // weird stuffs I have to add for engine
    void print_up_to(std::ostream &out, size_t n) const;
};
```

(Similarly there's stuffs for SquareMatrix, TriangularMatrix, Vector with their corresponding methods, but I won't be showing them here, it's on github anyway)

### Stage 4 (Gaussian Elimination)

The big one... took me forever to make this...

I first wrote a really arbitrary 4 variables 4 equations linear system, and start solving it using LU factorization. Just a quick warm up for the upcoming challenge.

Next, I started writing the LU factorization method, that returns a tuple of three matrices, P, L, U. It went surprisingly "well", until I realized my LU factorization only applies to square matrices.

...

I restarted, the whole thing, and started sketching arbitrary rectangular matrices, some with more rows than columns, some vice versa, until I realized the patterns.

I soon reached the conclusion that in PA=LU, L must be a N by min(N, M) matrix, and obviously, U shares the size of A and P is just a N by N square matrix

(assuming A is N by M, offcourse)

Then I realized the rests are pretty similar to how it works with a square matrix, with some minor tweakings, but tons of debuggings, the LU factorization method is done. I verified with some math people to make sure the method is functionally correct.

(The code)

```cpp
std::tuple<Matrix, Matrix, Matrix> Matrix::LU_factorization() const {

    if (get_data().size() == 0) {
        throw std::runtime_error("Matrix: LU_factorization: Cannot run LU "
                                 "factorization on an empty matrix");
    }

    const int N = get_num_row();
    const int M = get_num_col();

    Square_Matrix P = Square_Matrix::get_identity(N);
    Matrix L = get_identity(N, std::min(N, M));
    Matrix U = get_data();

    for (size_t j = 0; j < std::min(N, M); j++) {
        size_t pivot_index = get_largest_index(get_abs(U.get_col(j)), j);

        if (pivot_index != j) {
            P.row_operation_swap(pivot_index, j);
            U.row_operation_swap(pivot_index, j);

            for (size_t col = 0; col < j; ++col) {
                double tmp = L.get_data()[j][col];
                L.set_entry(j, col, L.get_data()[pivot_index][col]);
                L.set_entry(pivot_index, col, tmp);
            }
        }

        if (std::abs(U.get_data()[j][j]) < MACHINE_EPS) {
            continue;
        }

        for (size_t i = j + 1; i < N; i++) {
            double multiplier = U.get_data()[i][j] / U.get_data()[j][j];
            L.set_entry(i, j, multiplier);

            U.row_operation_add(i, j, -multiplier);
        }
    }

    std::tuple<Matrix, Matrix, Matrix> plu = std::make_tuple(P, L, U);
    return plu;
}
```

Next comes the forward/backward substitution, they are methods in the TriangularMatrix class

The two methods are way easier than LU, after looking up on wikipedia to reasure that I understood the algorithm correctly, I implemented the method

```cpp
Vector Triangular_Matrix::forward_substitution(const Vector &b) const {

    if (!::is_lower_triangular(v)) {
        throw std::invalid_argument(
            "class Triangular_Matrix: method forward_substitution: Current "
            "matrix is not a lower triangular matrix");
    }

    if (b.get_num_element() != get_num_row()) {
        throw std::invalid_argument(
            "class Triangular_Matrix: method forward_substitution: input "
            "Vector b's size does not match\nmatrix's size: " +
            std::to_string(get_num_row()) +
            "\nb's size: " + std::to_string(b.get_num_element()));
    }

    size_t n = get_num_row();
    size_t m = get_num_col();
    size_t pivot_count = std::min(n, m);

    Vector result = Vector::get_zero_vector(n);

    for (size_t i = 0; i < pivot_count; i++) {

        double val = b.get_element(i);

        for (size_t j = 0; j < i; j++) {
            val -= get_entry(i, j) * result.get_element(j);
        }

        double diag = get_entry(i, i);

        if (is_zero(diag)) {
            if (!is_zero(val)) {
                throw std::invalid_argument(
                    "class Triangular_Matrix: method forward_substitution: "
                    "system is inconsistent");
            }
            result.set_entry(i, 0, 0.0);
            continue;
        }

        val /= diag;
        result.set_entry(i, 0, val);
    }

    for (size_t i = pivot_count; i < n; i++) {
        double val = b.get_element(i);
        for (size_t j = 0; j < pivot_count; j++) {
            val -= get_entry(i, j) * result.get_element(j);
        }
        if (!is_zero(val)) {
            throw std::invalid_argument(
                "class Triangular_Matrix: method forward_substitution: system "
                "is inconsistent");
        }
    }

    return result;
}
```

And backward sub is practically the same, except for I had to use int for the type of loop variable instead of size_t, as the loop variable can reach 0 (definitely didn't took me 2 hours of debugging to find this out)

And that's the big math part done! I next connected it to determinant computation, using the determinant property det(AB)=det(A)det(B), I can simply apply LU factorization on a square matrix A to get PA=LU, and compute det(A) by det(A)=det(L)det(U)/det(P).

(O(n^3) time complexity, wayyyyyyyyyyyyy better than my highschool O(n!))

I also implemented methods that computes the basis for the nullspace... you can refer to the source code if you are interested. As it takes forever to explain how I got it

### Stage 5 (CLI interface)

![cli-screenshot1](/assets/posts/matrix-calculation/cli-screenshot1.png)

Next I reorganized all my files, and learned + utilized CMake for the compiling. So that I'm finally ready for the CLI interface

For the CLI interface, I made a file for Parser, a file for Engine. The Parser takes an input command and returns a struct defined as follow:

```cpp
enum class Command_Type { Meta, Operation, Invalid };

struct Command {
    Command_Type type;
    std::string operation;
    std::vector<std::string> args;
};
```

Where parser will filter all commands starting from a colon : as a command of Meta type, otherwise, it's gonna check if it has one of the following symbols: + - * =, or it has a def, solve, or det keyword at the correct spots.

If it is correct, then the command type will be Operation, with all the variables passed as args.

(Otherwise the command type will be invalid, obviously)

I used the following three libraries to faciliate my work: [map](https://en.cppreference.com/w/cpp/container/map.html), [replxx](https://github.com/AmokHuginnsson/replxx) and [tabulate](https://github.com/p-ranav/tabulate)

In Engine, I made a map that takes a string and maps to a Matrix:

```cpp
  private:
    std::map<std::string, Matrix> matrices;
```

I made a method that returns a table (from tabulate library) based on the current matrices method.

```cpp
tabulate::Table Engine::get_matrix_table() {
    tabulate::Table table;
    for (auto it = matrices.begin(); it != matrices.end(); it++) {
        auto &row =
            table.add_row(tabulate::RowStream{} << it->first << it->second);
        row.format().font_color(tabulate::Color::cyan);
    }

    return table;
}
```

And the Engine essentially loops over and over, with each loop, it does the following in order:

- clears the screen
- print the header (the title of the calculator and all matrices from tabulate)
- Use parser to get the input
- handles each type of input correspondingly

```cpp
while (result.running) {
    rx.clear_screen();

    print_header();
    const char *INPUT = rx.input("> ");
    if (INPUT == NULL) {
        result.running = false;
        continue;
    }
    line_input = INPUT;
    cmd = parser(line_input);

    if (cmd.type == Command_Type::Invalid) {
        continue;
    }

    if (cmd.type == Command_Type::Meta) {
        result = handle_meta(cmd);
    }

    if (cmd.type == Command_Type::Operation) {
        handle_operation(cmd);
        pause_console();
    }
}
```

The specfic input handlings are essentially just calling pre existed methods, note that for solving system of linear equation, if there's infinite methods, the engine will print the affine set, by making use of the solution and the nullspace. I specifically made a new class named Matrix_Analysis to handle this part smoothly

```cpp
struct Affine_Set {
    bool have_solution;
    Vector v;
    std::vector<Vector> basis;
};

class Matrix_Analysis {
  private:
    Matrix A;

    Square_Matrix P;
    Triangular_Matrix L;
    Triangular_Matrix U;

    void set_PLU();

  public:
    Matrix_Analysis();
    Matrix_Analysis(Matrix m);

    std::vector<Vector> get_image_basis() const;
    std::vector<Vector> get_kernel_basis() const;

    Affine_Set get_solution(const Vector &b) const;
};
```

That's pretty much all I got so far, something that took me a month during highschool, and two months during university

### conclusion

A very exhausting project, that dissolves into some drops of satisfying enjoyments, followed an ocean of newly acquired knowledge.

In both math and CS, this project taught me a lot. On the math side, I've never done so much algorithm related stuff ever in my life. On the CS side, I never rigorously design my own datatype with all the OOP inheritance stuffs set, and connect it to a CLI interface.

I will definitely keep on working on this sometime after the final exams, as it is not fully complete yet, I'm gonna just leave here a list of features which I must implement in the future

- Gram Schmidt Procedure
- QR decomposition
- diagonalization
- history functionality in the engine

I'm very confident that there's more functionalities I already planned previously, but I really can't remember any by now. Nonetheless I will be doing more readings about linear algebra during the coming up winter break, and I look forward to proceed working on this. Hope I will restart on this soon, unlike last pause all the way back to highschool.
