import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Created by amit on 20.10.16.
 */
public class Application {
    public static void main(String args[]) {
        try {
            RunCommand pdf2html = new RunCommand(Paths.get("." + File.separator + "pdfs"), true);
            pdf2html.processEvents();
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
