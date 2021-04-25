package com.egrocery.tools;

import java.io.IOException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.geom.PrecisionModel;

public class JsonToPointDeserializer extends JsonDeserializer<Point> {

    private final static GeometryFactory geometryFactory = new GeometryFactory(new PrecisionModel(), 4326);

    @Override
    public Point deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {

        try {
            String text = jp.getText();
            if(text == null || text.length() <= 0)
                return null;

            String[] coordinates = text.replaceFirst("POINT ?\\(", "").replaceFirst("\\)", "").split(" ");
            double lon = Double.parseDouble(coordinates[0]);
            double lat = Double.parseDouble(coordinates[1]);

            Point point = geometryFactory.createPoint(new Coordinate(lon, lat));
            return point;
        }
        catch(Exception e){
            return null;
        }
    }

}