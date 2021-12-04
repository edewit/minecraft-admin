package org.acme.rest.json;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class ClusterResourceTest {

    @Test
    public void testCreate() {
        given()
                .when().post("/api/cluster", "")
                .then()
                .statusCode(200);
    }
}
